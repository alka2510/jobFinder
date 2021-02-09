//Action creator
export const selectJob = job => {
    return{
        type: 'JOB_SELECTED',
        payload: job
    };
};

export const selectCompany = company => {
    return {
        type: 'COMPANY_SELECTED',
        payload: company
    };
};
