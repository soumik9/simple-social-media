import { useQuery } from "react-query";

const useAbout = () => {

    const { data: about, isLoading, refetch } = useQuery(['about'], () =>
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}about`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json()))

    return { about, aboutLoading: isLoading, aboutFetch: refetch };
}

export default useAbout;