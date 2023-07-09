
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';
const UseCart = () => {
  const { user } = useContext(authContext)
  const token = localStorage.getItem('access-token')

  const { refetch, data: carts = [], error } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`
        }
      })
      return res.json()
    },
  })

  return [carts, refetch]
};

export default UseCart;