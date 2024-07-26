<script setup>
const $searchKeyWord = ref("");
const $filter = ref("filter by region");
const $resp = await useFetch("https://restcountries.com/v3.1/all");
const {data} = $resp;
const $allCountries = ref([...data.value]);

watch($searchKeyWord, (search) => {
    $allCountries.value = data.value.filter((el) =>
        el.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
});
watch(
    $filter,
    ($filtering) => {
        $allCountries.value = data.value.filter((el) =>
            $filtering == "filter by region" ? el : el.region == $filtering
        );
    },
    {
        immediate: true,
    }
);
</script>
<template>
    <div aria-label="home page" class="mt-10">
        <div
            class="container flex justify-between gap-y-3 flex-wrap items-center"
        >
            <form class="min-w-[250px] w-[500px] max-w-[500px]">
                <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >Search</label
                >
                <div class="relative">
                    <div
                        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                        <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        v-model="$searchKeyWord"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-DarkBlue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for country..."
                        required
                    />
                </div>
            </form>

            <form class="max-w-sm">
                <select
                    id="countries"
                    v-model="$filter"
                    class="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Oceania">oceania</option>
                </select>
            </form>
        </div>
    </div>

    <section aria-label="countries-container" class="mt-14">
        <div
            class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 pb-6"
        >
            <NuxtLink
                role="link"
                :to="`/countries/${country.name.common}`"
                
                v-for="country in $allCountries"
                class="rounded-lg bg-light-veryLightGray dark:bg-dark-DarkBlue shadow-md"
            >
                <div
                    aria-label="image container"
                    class="w-full"
                  
                >
                    <img
                        :src="country.flags.svg"
                        :alt="country.name.common"
                        class="min-w-none object-fill "
                    />
                </div>
                <article aria-label="information about the country" class="p-6">
                    <h2
                        aria-label="country name"
                        class="text-black font-[800] mb-6 dark:text-light-veryLightGray"
                    >
                        {{ country.name.common }}
                    </h2>
                    <ul
                        role="list"
                        aria-label="additional info"
                        class="flex flex-col gap-y-3"
                    >
                        <li
                            class="text-sm capitalize text-light-DarkGray"
                            role="listitem"
                            aria-label="population info"
                        >
                            <span
                                class="text-dark-DarkBlue dark:text-light-veryLightGray font-[700]"
                                >population:</span
                            >
                            {{ country.population }}
                        </li>
                        <li
                            class="text-sm capitalize text-light-DarkGray"
                            role="listitem"
                            aria-label="region info"
                        >
                            <span
                                class="text-dark-DarkBlue dark:text-light-veryLightGray font-[700]"
                                >region:</span
                            >
                            {{ country.region }}
                        </li>
                        <li
                            class="text-sm capitalize text-light-DarkGray"
                            role="listitem"
                            aria-label="capital info"
                        >
                            <span
                                class="text-dark-DarkBlue dark:text-light-veryLightGray font-[700]"
                                >capital:</span
                            >
                            {{ `${country.capital}` }}
                        </li>
                    </ul>
                </article>
            </NuxtLink>
        </div>
    </section>
</template>
