export interface ICustomer {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IPlanet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    name: string;
    gravity: string;
    films: string;
    orbital_period: string;
    surface_water: string;
    terrain: string[];
    population: string[];
    residents: string[];
    rotation_period: string[];
    url: string;
}

export interface IResident {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: any[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}
export interface ISpecie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld?: any;
    language: string;
    people: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IVehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}
export interface ISpaceship {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
        length: string;
        max_atmosphering_speed: string;
        crew: string;
        passengers: string;
        cargo_capacity: string;
        consumables: string;
        hyperdrive_rating: string;
        MGLT: string;
        starship_class: string;
        pilots: string[];
        films: string[];
        created: Date;
        edited: Date;
        url: string;
}
