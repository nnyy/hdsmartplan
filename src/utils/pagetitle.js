import settings from '@/settings'

const title = settings.title || '中交海德平台'

export default function getPageTitle(pagetitle) {
    if (pagetitle) {
        return `${pagetitle} - ${title}`
    }
    return `${title}`
}
