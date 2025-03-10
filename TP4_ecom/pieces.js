new Vue({
    el: '#app',
    data: {
        pieces: [],               // List of auto parts
        searchQuery: '',          // Search query
        selectedCategory: '',     // Selected category filter
        onlyAvailable: false,     // Filter by availability
        cart: []                  // Shopping cart
    },
    computed: {
        // Get unique categories from the pieces list
        categories() {
            return [...new Set(this.pieces.map(piece => piece.categorie))];
        },
        // Filtered list of pieces based on search, category, and availability
        filteredPieces() {
            let filtered = this.pieces;
            if (this.searchQuery) {
                filtered = filtered.filter(piece =>
                    piece.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            if (this.selectedCategory) {
                filtered = filtered.filter(piece => piece.categorie === this.selectedCategory);
            }
            if (this.onlyAvailable) {
                filtered = filtered.filter(piece => piece.disponible);
            }
            return filtered;
        }
    },
    methods: {
        // Sort pieces by price (ascending or descending)
        sortByPrice(order) {
            this.pieces.sort((a, b) => order === 'asc' ? a.prix - b.prix : b.prix - a.prix);
        },
        // Add a piece to the cart
        addToCart(piece) {
            this.cart.push(piece);
            alert(`${piece.nom} ajouté au panier!`);
        }
    },
    // Fetch data from JSON file when the app is mounted
    mounted() {
        fetch('pieces-auto.json')
            .then(response => response.json())
            .then(data => {
                this.pieces = data;
            });
    }
});