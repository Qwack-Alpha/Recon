import api from "../api/client";
import type { PaymentFile } from "../types/file";
const FileService = {
    async history(): Promise<PaymentFile[]> {
        const response = await api.get<PaymentFile[]>(
            "/files",
        );
        return response.data;
    },
    async uploadBatch(
        bankId: string,
        files: {
            payment?: File; bank?: File; aml?: File; fx?: File;
            correspondent?: File; settlement?: File
        },
    ): Promise<unknown> {
        const form = new FormData();
        form.append("bank_id", bankId);
        Object.entries(files).forEach(([k, f]) => {
            if (f) form.append(k, f);
        });
        const response = await api.post(
            "/files/upload-batch",
            form,
            { headers: { "Content-Type": "multipart/form-data" } },
        );
        return response.data;
    },
};
export default FileService;
