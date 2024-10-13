"use client";

import { useState } from "react";
import CreateAndUpdateFormForPageMeta from "./CreateAndUpdateFormForPageMeta";


const UpdateMeta = ({ metaData }) => {
    const [isUpdateCreateLoading, setIsUpdateCreateLoading] = useState(false);


    return (
        <>
            <CreateAndUpdateFormForPageMeta
                metaData={metaData}
                isUpdateCreateLoading={isUpdateCreateLoading}
                setIsUpdateCreateLoading={setIsUpdateCreateLoading}
            />
        </>
    );
};

export default UpdateMeta;

