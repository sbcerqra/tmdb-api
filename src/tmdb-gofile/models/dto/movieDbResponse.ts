import { Movies } from "../movies";

export interface movieDbResponse {
    page: number,
    results: [Movies],
    total_pages: number,
    total_results: number
}