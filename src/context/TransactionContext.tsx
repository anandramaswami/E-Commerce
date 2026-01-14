import { createContext, useContext, useState } from "react";


type TransactionContextType = {
    orderId: string | null;
    username: string;
    productName: string;
    amount: number;
    paymentStatus: "SUCCESS" | "FAILED" | "PENDING";
    createdAt: string;
};

type TransactionContextValueType = {
    transactions: TransactionContextType[];
    addTransaction: (transaction: TransactionContextType) => void;
    updateTransactionStatus: (orderId: string, status: "SUCCESS" | "FAILED" | "PENDING") => void;
    getTransactionByOrderId: (orderId: string) => TransactionContextType | undefined;
};

export const TransactionContext = createContext<TransactionContextValueType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [transactions, setTransactions] = useState<TransactionContextType[]>([]);

    const addTransaction = (transaction: TransactionContextType) => {
        setTransactions((prev) => [...prev, transaction]);
    };

    const updateTransactionStatus = (orderId: string, status: "SUCCESS" | "FAILED" | "PENDING") => {
        setTransactions((prev) =>
            prev.map((txn) =>
                txn.orderId === orderId
                    ? { ...txn, paymentStatus: status }
                    : txn
            )
        );
    };
    
    const getTransactionByOrderId = (orderId: string) => {
        return transactions.find((txn) => txn.orderId === orderId);
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, updateTransactionStatus, getTransactionByOrderId }}>
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransaction = () => {
    const context = useContext(TransactionContext);
    if (context === undefined) {
        throw new Error('useTransaction must be used within a TransactionProvider');
    }
    return context;
};

