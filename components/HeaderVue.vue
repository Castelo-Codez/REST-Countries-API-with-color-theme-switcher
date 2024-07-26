<script setup>
import {$themeMode} from "~/store/store";

function $changeTheme() {
    $themeMode.value === "Light"
        ? ($themeMode.value = "dark")
        : ($themeMode.value = "Light");
}
watch($themeMode, (newMode) => {
    if (newMode == "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    } else {
        window.localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark");
    }
});
</script>
<template>
    <header
        role="banner"
        class="py-6 bg-light-veryLightGray shadow-md dark:bg-dark-DarkBlue"
    >
        <div
            class="container flex justify-between items-center"
            aria-label="content wrapper"
        >
            <span
                aria-label="normal text"
                class="font-[800] capitalize text-[1rem] sm:text-[1.5rem] dark:text-light-veryLightGray"
                >where in the world ?</span
            >
            <button
                role="button"
                aria-label="theme Switcher Button"
                type="button"
                class="flex justify-center items-center gap-x-3 font-[700] capitalize dark:text-light-veryLightGray"
                @click="$changeTheme"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 dark:fill-light-veryLightGray"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                </svg>

                {{ $themeMode }} Mode
            </button>
        </div>
    </header>
</template>
