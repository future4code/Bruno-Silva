export const goToListTrips = (history) => {
    history.push("/trips/list")
}

export const goToAdminHome = (history) => {
    history.push("/admin/trips/list");
}

export const goToHome = (history) => {
    history.push("/");
};

export const previousPage = (history) => {
    history.goBack();
};

export const goToAppForm = (history) => {
    history.push("/trips/application");
};

export const goToCreateTrip = (history) => {
    history.push("/admin/trips/create");
};