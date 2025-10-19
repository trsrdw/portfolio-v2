import { CharacterDetail, CharacterList, EpisodeDetail, EpisodeList, LocationDetail, LocationList } from "@/lib/types/data";
import { fetchAll, fetchDetail } from "@/lib/utils/fetch";

export async function getCharacters(): Promise<CharacterList[]> {
    return fetchAll<CharacterList>("character", 200);
}

export async function getLocations(): Promise<LocationList[]> {
    return fetchAll<LocationList>("location", 200);
}

export async function getEpisodes(): Promise<EpisodeList[]> {
    return fetchAll<EpisodeList>("episode", 200);
}

export async function getCharacterDetail(id: number): Promise<CharacterDetail[]> {
    return fetchDetail<CharacterDetail>("character", id);
}

export async function getEpisodeDetail(id: number): Promise<EpisodeDetail[]> {
    return fetchDetail<EpisodeDetail>("episode", id);
}

export async function getLocationDetail(id: number): Promise<LocationDetail[]> {
    return fetchDetail<LocationDetail>("location", id);
}