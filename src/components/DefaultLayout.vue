<template>
    <v-container>
        <v-app-bar color="surface-variant" app>
            <v-toolbar-title>
                <RouterLink to="/">
                    <v-btn color="#FFF">BINGO!</v-btn>
                </RouterLink>
            </v-toolbar-title>

        </v-app-bar>

        <!-- Main Content -->
        <v-main>
            <v-container > 
                <slot></slot>
            </v-container>
        </v-main>
    </v-container>
</template>

<script setup lang="ts">
</script>