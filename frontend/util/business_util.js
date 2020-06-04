
export const fetchBusiness = id => (
    $.ajax({
        method: 'GET',
        url: `api/benches/${id}`
    })
);