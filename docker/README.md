# Docker for Overbookd

Here you have all files to deploy overbookd

Before all, for prod & pre-prod and dev compose, you should create a network :

```bash
docker network create traefik-public
```
## Dev
```bash
docker-compose -f docker-compose-dev.yml -p dev --env-file dev.env up
```
Default user and password for Traefik dashboard is ``user`` : ``password`` 

Default URL for dev
--
| URL | Usage | Example |
|-----|-------|---------|
|traefik.${DOMAIN}| Traefik dashboard | https://traefik.traefik.me |
|overbookd.${DOMAIN}| Overbookd frontend | https://overbookd.traefik.me |
|overbookd.${DOMAIN}/api| Overbookd backend | https://overbookd.traefik.me/api |

## Keyclaok admin user creation

Connect to keycloak with overbookd.${DOMAIN}/auth and connect with ``KEYCLOAK_USER`` and ``KEYCLOAK_PASSWORD`` from the ``.env`` file. Go to ``Users`` section and add a new user with ``OVERBOOKD_KEYCLOAK_ADMIN_USERNAME``and ``OVERBOOKD_KEYCLOAK_ADMIN_PASSWORD`` from the ``.env`` file. Take care to define a permanent password. To finish add in ``realm-management`` client roles the ``manage-users`` role

## The first user

You can register on the front page att [https://overbookd.traefik.me/signup](https://overbookd.traefik.me/signup)  
After you should use [Mongo compass](https://www.mongodb.com/try/download/compass) to access database with this URL : ``mongodb://overbookd:password@127.0.0.1:27017``  
To finish in user collection you can add ``admin`` role in team of your user :

```json
{
  "team": ["admin"]
}
```
