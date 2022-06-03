import useSWR from 'swr'
import api from '../services/api'

export function useSWRFetch<T>(url: string )
{
    const {data, error, mutate} = useSWR<T>(url, async url => {        
        const {data} = await api.get(url)
        return data
    })

    return {data, error, mutate}
}

