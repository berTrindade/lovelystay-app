 export enum RepositoriesTypes {
    LOAD_REQUEST = '@@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@@repositories/LOAD_SUCCCES',
    LOAD_FAILURE = '@@repositories/LOAD_FAILURE'
}

export interface Owner {
   avatar_url: string;
   login: string;
}

export interface Repository {
    id: number;
    name: string;
    description: string;
    topics: string[];
    owner: Owner;
}

export interface RepositoriesState {
    readonly data: Repository[];
    readonly loading: boolean;
    readonly error: boolean;
}