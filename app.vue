<script setup>
import {$themeMode} from "./store/store";
if (globalThis.window !== undefined) {
    if (window.localStorage.getItem("theme")) {
        document.documentElement.classList.add("dark");
        $themeMode.value = "Dark";
    } else {
        $themeMode.value = "Light";
    }
}
useHead({
    title: "countries app",
    meta: [{name: "description", content: "countries app | front end mentor"}],
    bodyAttrs: {
        class: "dark:bg-dark-VeryDarkBlue",
    },
    link: [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
        },
        {
            href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap",
            rel: "stylesheet",
        },
    ],
});
</script>
<template>
    <div>
        <NuxtLoadingIndicator :height="3" :throttle="50" :duration="2000" />
        <HeaderVue />
        <NuxtPage />
    </div>
</template>
