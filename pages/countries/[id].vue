<script setup>
const route = useRoute();
const $resp = await useFetch("https://restcountries.com/v3.1/all");
const {data} = $resp;
useHead({
    title: route.params.id,
});
const $targetCountry = ref();
$targetCountry.value = data.value.find(
    (el) => el.name.common == route.params.id
);
function $back() {
    history.go(-1);
}
console.log($targetCountry.value);
</script>

<template>
    <section
        aria-label="details about the country"
        class="mt-14"
        :key="$targetCountry"
    >
        <div class="container">
            <button
                @click="$back"
                role="button"
                aria-label="back to all countries"
                title="back button"
                class="dark:text-light-veryLightGray shadow-md text-gray-800 text-sm capitalize dark:bg-dark-DarkBlue py-2 px-6 flex d justify-center gap-x-3 items-center"
            >
                <svg
                    class="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                </svg>
                back
            </button>
            <section
                class="mt-14 flex flex-col lg:flex-row lg:justify-between gap-4"
                aria-label="details about the country"
            >
                <div aria-label="country flag" class="lg:w-[45%]">
                    <img
                        :src="$targetCountry.flags.svg"
                        :alt="$targetCountry.name.common"
                        class="min-w-none object-fill"
                    />
                </div>
                <div aria-label="info" class="py-8 relative lg:w-[45%]">
                    <h2
                        aria-label="country name"
                        class="text-[0.55rem] font-[800] sm:text-[2rem] dark:text-white text-black"
                    >
                        {{ $targetCountry.name.official }}
                    </h2>
                    <div
                        aria-label="deep info"
                        class="mt-6 flex justify-between"
                    >
                        <ul role="list" class="flex flex-col gap-y-2 flex-wrap">
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >Native Name :</span
                                >
                                {{ $targetCountry.name.common }}
                            </li>
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >population :</span
                                >
                                {{ $targetCountry.population }}
                            </li>
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >region :</span
                                >
                                {{ $targetCountry.region }}
                            </li>
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >sub region :</span
                                >
                                {{ $targetCountry.subregion }}
                            </li>
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >capital :</span
                                >
                                {{ $targetCountry.capital[0] }}
                            </li>
                        </ul>
                        <ul role="list" class="flex flex-col gap-y-2">
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >Top Level Domain :</span
                                >
                                {{ $targetCountry.tld[0] }}
                            </li>
                            <li
                                class="text-sm capitalize text-light-DarkGray"
                                role="listitem"
                                aria-label="main info"
                            >
                                <span
                                    class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                                    >languages :
                                </span>
                                <ul
                                    role="list"
                                    aria-label="languages"
                                    class="inline-flex"
                                >
                                    <li
                                        role="listitem"
                                        v-for="$lang in $targetCountry.languages"
                                        :aria-label="$lang"
                                        class="group"
                                    >
                                        {{ $lang }}
                                        <span class="group-last:hidden">,</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="absolute z-50 bottom-0">
                        <span
                            class="capitalize text-dark-DarkBlue dark:text-light-veryLightGray font-[400]"
                            >border countries :</span
                        >
                        <ul
                            role="listitem"
                            aria-label="border countries"
                            class="inline-flex ml-5 gap-2 flex-wrap"
                        >
                            <li
                                aria-label="border"
                                v-for="border in $targetCountry.borders"
                            >
                                <span
                                    role="link"
                                    class="dark:text-light-veryLightGray shadow-md text-gray-800 text-sm capitalize dark:bg-dark-DarkBlue py-2 px-6 flex d justify-center items-center"
                                >
                                    {{ border }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
