<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar absolute scroll-target="#scrolling-techniques-4">
        <v-btn class="ma-2" color="orange darken-2" dark>
          <v-icon dark left> mdi-arrow-left </v-icon>Back
        </v-btn>

        <v-toolbar-title>Ta fiche tâche</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="667"
      >
        <v-card min-height="300" style="height: 667px">
          <v-card-text><br /><br /> </v-card-text>
        </v-card>
      </v-sheet>
    </v-card>
  </v-app>
</template>
