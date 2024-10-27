function performSearch() {
    // Search query // استعلام البحث
    let query = document.getElementById('searchQuery').value;

    // Selected file type // نوع الملف المختار
    let fileType = document.querySelector('input[name="fileType"]:checked')?.value || "";

    // Selected search point // نقطة البحث المختارة
    let searchPoint = document.querySelector('input[name="searchPoint"]:checked')?.value || "";

    // Create Google Dork // إنشاء دُورْك (Google Dork)
    let dork = `intitle:"${query}"`;
    if (fileType) {
        dork += ` filetype:${fileType}`;
    }
    if (searchPoint && searchPoint !== "article" && searchPoint !== "book") {
        dork += ` site:${searchPoint}`;
    } else if (searchPoint === "article") {
        dork += ` inurl:article`;
    } else if (searchPoint === "book") {
        dork += ` inurl:book`;
    }

    // Perform search on Google // إجراء بحث على Google
    window.open(`https://www.google.com/search?q=${encodeURIComponent(dork)}`);

    // Reset the form // إعادة تعيين النموذج
    document.getElementById('searchQuery').value = "";
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
}


