export const shareLink = async () => {
  if (navigator.share) {
    await navigator.share({
      url: window.location.href
    })
  }
}
