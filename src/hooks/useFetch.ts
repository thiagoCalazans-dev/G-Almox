import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import useSWR from 'swr'
import SWR from 'swr'
import api from '../services/api'




export function useSWRFetch<t>(url: string)
{
    const {data, error, mutate} = useSWR<t>(url, async url => {
        const response = await api.get(url);     
        return response.data;
    })

    return {data, error, mutate}
}

