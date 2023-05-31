
export class User {
    id: number;
    email: string;
    username: string;
    phone: string;
    address: string;
    payment: string;
    password: string;

    constructor(id: number, email: string, username: string, phone: string, address: string, payment: string, password: string) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.phone = phone;
        this.address = address;
        this.payment = payment;
        this.password = password;
    }

    getID() {
        return this.id;
    }
    getName() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getPhone() {
        return this.phone;
    }
    getAddress() {
        return this.address;
    }
    getPayment() {
        return this.payment;
    }
    getPassword() {
        return this.password;
    }
}