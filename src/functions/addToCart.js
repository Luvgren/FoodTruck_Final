export function toggleArrayItem(array, item) {
    return array.includes(item)
        ? array.filter((i) => i !== item) // Remove
        : [...array, item];               // Add
}