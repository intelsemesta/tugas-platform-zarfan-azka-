const diskon = (totalBelanja)=>{
    if (totalBelanja > 50000) {
        return totalBelanja * 0.1; // Diskon 10%
    }
    return 0;
};

module.exports = diskon;