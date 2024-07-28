import axios from 'axios'

const url ="http://localhost:5000";

export const addPublisher =  async (publisher) => {
    return await axios.post(`${url}/getPublisers`,publisher);
}
export const getPublisher =  async () => {
    return await axios.get(`${url}/Publisers`);
}
export const AddBookthroughAxious =  async (books) => {
    return await axios.post(`${url}/AddBooks`,books);
}

export const ViewBookthroughAxious =  async () => {
    return await axios.get(`${url}/ViewBooks`);
}
export const UpdateThroughAxious =  async (updateBook) => {
    return await axios.post(`${url}/UpdateBooks`,updateBook);
}
export const PurchaseBookthroughAxious =  async (purchaseBook) => {
    return await axios.post(`${url}/PurchaseBooks`,purchaseBook);
}
export const ReturnBookthroughAxious =  async (returnBook) => {
    return await axios.post(`${url}/ReturnBooks`,returnBook);
}
export const generateBillThroughAxious =  async (bill) => {
    return await axios.post(`${url}/GenerateBill`,bill);
}