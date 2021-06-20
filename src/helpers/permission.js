export default function getPermission() {
    if (window.innerWidth < 768) {
        return 'mobile';
    }
    return 'desktop';
}