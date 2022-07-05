class AnimeService {

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getCharacter = async (offset) => {
        const res = await this.getResource(`https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=${offset}`);
        return res;
    }
}

export default AnimeService;