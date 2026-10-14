import { AxiosError } from "axios";
interface FastAPIValidationItem {
    msg?: string;
}
interface FastAPIErrorBody {
    detail?: string | FastAPIValidationItem[];
}
/**
 * Normalises an unknown error (typically from axios / FastAPI) into a
 * human-readable message. FastAPI returns `detail` as either a string or an
 * array of validation objects, so both shapes are handled.
 */
export function getErrorMessage(
    error: unknown,
    fallback = "Something went wrong. Please try again.",
): string {
    if (error instanceof AxiosError) {
        const data = error.response?.data as FastAPIErrorBody | undefined;
        const detail = data?.detail;
        if (typeof detail === "string" && detail.trim()) {
            return detail;
        }
        if (Array.isArray(detail)) {
            const messages = detail
                .map(item => item?.msg)
                .filter((msg): msg is string => Boolean(msg));
            if (messages.length) {
                return messages.join(", ");
            }
        }
        if (error.message) {
            return error.message;
        }
    }
    if (error instanceof Error && error.message) {
        return error.message;
    }
    return fallback;
}