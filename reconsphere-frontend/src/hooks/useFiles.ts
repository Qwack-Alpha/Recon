import {

    useMutation,

    useQuery,

    useQueryClient

} from "@tanstack/react-query";

import FileService from "../services/fileService";

export function useFiles() {

    const client =

        useQueryClient();

    const files =

        useQuery({

            queryKey: ["files"],

            queryFn: FileService.history

        });

    const upload =

        useMutation({

            mutationFn: ({

                bankId,

                files

            }: {

                bankId: string;

                files: Record<string, File | null>;

            }) =>

                FileService.uploadBatch(

                    bankId,

                    files

                ),

            onSuccess() {

                client.invalidateQueries({

                    queryKey: ["files"]

                });

            }

        });

    return {

        files,

        upload

    };

}
