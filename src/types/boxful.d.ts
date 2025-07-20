declare module 'boxful-types' {
    export interface Product {
        id?: string
        length: number
        height: number
        width: number
        weight: number
        content: string
        createdAt?: string
    }

    export interface Order {
        id?: string
        userId?: string
        collectionAddress: string
        scheduledDate: string
        firstName: string | null
        lastName: string | null
        email: string
        phoneNumber: string
        recipientAddress: string
        department: string
        municipality: string
        referencePoint: string
        instructions?: string
        createdAt?: string
        _count?: {
            Product: number
        }
        Product: Product[]
    }

    export interface User {
      id: string
      email: string
      firstName: string | null
      lastName: string | null
      gender: string
      birthDate: string
      phoneNumber: string
      password: string
      createdAt: string
    }
}