<template>
<div class="grid w-full h-screen bg-gray-200 items-center">
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-72 m-auto">
        <p>Hello From About Page ! {{ text }}</p>
        <button @click="getKeyword">Get Keyword</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
        }
    },
    methods: {
        getKeyword() {
            // this.axios.post('https://ahrefs.com/v4/ftKgGetKeywordIdeas', {"captcha":"03AGdBq26-BCf_DFqBI8e8mmrST806-7HtALT6ZqETGO8fyZCm-OwdVI88EU-cXVl1mezZ64WxVeJx-z4yGXlk9GcLPlt45IYiyvmGuMp9mt5MreeD9lrLLnEJNtj28yOLybmHtg8uaEQhTpJRixFYM5_RWyUPmP5zbE8O8HC3bhFT1qlA2YRR8uTCH-SlUYD8b1DjC6dZhqFZq4QHz1XPqghKqerPdXcTgUChBsjGsTseFezPaSpQT6NqOjPjVNqcRSGAQxvKcKMQ59MhrD47bXp2Io31pc2UdbW-4Lp1zZbUzPEfVIrQfVfxS74JnyblMZdulswe6kGlkZYbClVa_4qK8C8Py-YtDQXbSbWZ5Hb23DnFYmAAsSwf5butkKOUK3Y14OWc109Tn40P8x0HPl5IegVbXHoMyK6n6-EcXcM4KGYO3K9dQC09NT4oTmbg691_PyVMnBDGs0pnsAPtJqTCLPw98E6HSgL-k3di22OxhxqWfOepft7e3ysRBPE5-r6pH5cJdWwXgd0ewEnA1S2LLWXl7Qtx3YZcMPgcGR4H4uoUTGPOit1b_9ODNLcuNIJvP8JoxOFJk-cehY8S0mO1dPhL5fk8CIXdL27Z5ZAOqFLi9KR4RIFFt7xKASZvUx3o0KdnsbsUH9kigWyH2KzYF-V49R9GxTK5emDWZqke-Ddn_TUUZIXyJjtbJcW2t5XYuDF1s5ZNHGveT7SpnjTzAgll_MpQLEX1wJkttIQAfuQa2n13bQIOwD1kTAA6OG5A7Re0XTAEd1C8ArliJ2oW2XWrSfb2Uz-1iOyjUA6N1Weghk4JBEwNd548CpWaVuHOtahe5OlwEIDwa10LWtIYyysU1JebsgDm0uALEPAWqi2p_qJXjccykV1-CkwRl1SoEfGVoJSKSh08-C1zwkDpbj98pLa7_F5o5VIp-bz-Ft3ii46D0AfAN0B_IkbEowoZLwqmtVlddTNVWRGPKZkDHUxJpch1s-i-GkSjkgQkgGUP-s7asiOnTp3dH-PBfulejSsa0_N-or-vQAzbEby4nqnb95H9P0LPqzupiEJelGIs1b69rIyAFyQ9n6DenUrVuAKH3qJ3Gju7xS8wlJ9EFBmQCJiIxGiAvGH5YF1kmfyZlUGHogDytoThd_c30uzpYc-dNmKeeasWeaFdmXLvqwy9KjlElSnccazoPXxXgI5Ea8Mq-Fhf8KpalZ9E0DRJQOa-kHUa","ideasType":"AllIdeas","searchEngine":"Bing","country":"th","keyword":["Some","books"]})
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     })
        }
    }
}
</script>
