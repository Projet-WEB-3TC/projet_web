const getStoreType = (store) => {
  return {
    actionContext: {},
    rootState: {},
    rootGetters: {},
    storeInstance: {}
  };
};

const actionTree = (_store, tree) => tree;

const getterTree = (_state, tree) => tree;

const mutationTree = (_state, tree) => tree;

const getAccessorType = (store) => {
  return void 0;
};
const getNestedState = (parent, namespaces) => {
  if (!parent[namespaces[0]]) {
    return parent;
  } else {
    return getNestedState(parent[namespaces[0]], namespaces.slice(1));
  }
};
const createAccessor = (store, {
  getters,
  state,
  mutations,
  actions,
  namespaced
}, namespace = "") => {
  const namespacedPath = namespace && namespaced ? `${namespace}/` : "";
  const accessor = {};
  Object.keys(getters || {}).forEach((getter) => {
    Object.defineProperty(accessor, getter, {
      get: () => store.getters[`${namespacedPath}${getter}`]
    });
  });
  const evaluatedState = state ? state instanceof Function ? state() : state : {};
  Object.keys(evaluatedState).forEach((prop) => {
    if (!Object.getOwnPropertyNames(accessor).includes(prop)) {
      const namespaces = namespace.split("/");
      Object.defineProperty(accessor, prop, {
        get: () => getNestedState(store.state, namespaces)[prop]
      });
    }
  });
  Object.keys(mutations || {}).forEach((mutation) => {
    accessor[mutation] = (mutationPayload) => store.commit(`${namespacedPath}${mutation}`, mutationPayload);
  });
  Object.keys(actions || {}).forEach((action) => {
    accessor[action] = (actionPayload) => store.dispatch(`${namespacedPath}${action}`, actionPayload);
  });
  return accessor;
};
const useAccessor = (store, input, namespace) => {
  const accessor = createAccessor(store, input, namespace);
  Object.keys(input.modules || {}).forEach((moduleNamespace) => {
    const nestedNamespace = namespace ? `${namespace}/${moduleNamespace}` : moduleNamespace;
    accessor[moduleNamespace] = useAccessor(store, input.modules[moduleNamespace], nestedNamespace);
  });
  return accessor;
};
const getAccessorFromStore = (pattern) => {
  return (store) => useAccessor(store, pattern._modules.root._rawModule);
};

const createMapper = (accessor) => {
  const mapper = (prop, properties) => {
    if (!properties) {
      return Object.fromEntries((Array.isArray(prop) ? prop : [prop]).map((property) => [
        property,
        function(...args) {
          const value = accessor ? accessor[property] : this.$accessor[property];
          if (value && typeof value === "function")
            return value(...args);
          return value;
        }
      ]));
    }
    return Object.fromEntries(properties.map((property) => [
      property,
      function(...args) {
        const value = accessor ? accessor[prop][property] : this.$accessor[prop][property];
        if (value && typeof value === "function")
          return value(...args);
        return value;
      }
    ]));
  };
  return mapper;
};

export { actionTree, createMapper, getAccessorFromStore, getAccessorType, getStoreType, getterTree, mutationTree, useAccessor };
