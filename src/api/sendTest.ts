import axios from "axios";
import { TestItemProps } from "../types/myTest";

export async function sendTest(data: any) {
    await axios.post('https://fakestoreapi.com/products', data)
}