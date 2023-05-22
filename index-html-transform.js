module.exports = async(targetOptions, indexHtmlContent) => {
    indexHtmlContent = indexHtmlContent.replaceAll("type=\"module\"", "defer");
    return indexHtmlContent;
}