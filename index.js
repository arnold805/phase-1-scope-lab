var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer() {
    bestCustomer = 'not bob' 
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'hi'
    leastFavoriteCustomer = 'bye'
}