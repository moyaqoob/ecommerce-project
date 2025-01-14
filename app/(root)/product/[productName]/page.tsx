
import React, { ReactNode } from 'react'



export default async function FolderName({params}:
    {params:Promise<{
        folderName:string
    }>
}){
    const folderId = (await params).folderName


    return(
        <div>
            hello 
            {JSON.stringify(folderId)}
        </div>
    )
}