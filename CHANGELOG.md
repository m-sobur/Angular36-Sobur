# Changelog

## [Unreleased]

- /

### VZhyrytskiy Вопросы

## [1.0.2] - 2023-06-12

### Added

- Created OrderByPipe in SharedModule

### Changed

- Used | currency and | uppercase pipe's in product template
- Used | async pipe in product-list template

## [1.0.1] - 2023-06-11

### Added

- Added ConfigOptionsService, ConstantsService, GeneratorService, GeneratorFactory, LocalStorageService by Task3/2-6
- Created font-resize directive by Task3/8

### Changed

- Changed CartService by Task3/1
- Changed FirstComponent by Task3/7

## [1.0.0] - 2023-05-10

### Added

- Cart Item component
- WheelEvents in the CartItem
- Cart model
- Highlight directive
- Added modules(Shared, Cart, Products)


### Changed

- Changed implementation of the cart

## [0.0.9] - 2023-04-25

### Changed

- The product-list.component is now processing a method(onAddToCartParent) to add a product to cart @Output binding

### Deleted

- Removed non-working code related to Total Price

## [0.0.8] - 2023-04-24

### Changed

- Redundant div removed [product-list.component](src/app/products/components/product-list/product-list.component.html)

## [0.0.7] - 2023-04-19

### Added

- Tailwind is installed
- Several styles for the buttons have been added

## [0.0.6] - 2023-04-19

### Added

- Delete a specific item in the cart by button

## [0.0.5] - 2023-04-18

### Changed

- Migrated calculateTotalPrice method logic from [cart-list.component](./src/app/cart/components/cart-list/cart-list.component.ts) to [cart.service](./src/app/cart/services/cart.service.ts)

### Fixed

- Fixed assignments in component constructors, assignments now work through the implementation of the OnInit interface

## [0.0.4] - 2023-04-14

### Added

- Cart total price feature

## [0.0.3] - 2023-04-14

### Added

- Cart fuctionality [Cart](./src/app/cart/)
- Products [Products](./src/app/products/)

### Changed

- The project is organised by function, not by entity type

## [0.0.2] - 2023-04-13

### Added

- Created and configured FirstComponent [FirstComponent](./src/app/first/)

### Changed

- Changed base AppTemplate [AppTemplate](./src/app/app.component.html)

## [0.0.1] - 2023-04-13

- initial release

<!-- Links -->

[keep a changelog]: https://keepachangelog.com/en/1.0.0/
[semantic versioning]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->

[unreleased]: https://github.com/m-sobur/Angular36-Sobur/compare/v1.0.2...HEAD

[1.0.2]: https://github.com/m-sobur/Angular36-Sobur/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/m-sobur/Angular36-Sobur/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.9...v1.0.0
[0.0.9]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/m-sobur/Angular36-Sobur/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/m-sobur/Angular36-Sobur/releases/tag/v0.0.1
