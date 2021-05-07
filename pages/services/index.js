import { useRouter } from 'next/router'

export default function Services() {
    const router = useRouter()

    return (
        <button type="button" onClick={() => router.push('/')}>
            Вернуться
        </button>
    )
}