import {useRouter} from 'next/router'

export default function Category() {
    const router = useRouter()
    const id = router.query.id;

    return (<>
        <div>id: {id}</div>
        <button type="button" onClick={() => router.push('/')}>
            Вернуться
        </button>
    </>)
}