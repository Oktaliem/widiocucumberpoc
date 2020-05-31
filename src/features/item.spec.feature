Feature: Manage Items

    As a User of Akaunting software
    I want to be able to manage Items

    Background:
        Given I have logged in to Akauntin web portal

    @Verbose
    Scenario Outline: Add New Item
        When I add New Item Form with "<Name>" and "<SKU>" and "<Description>"
        Examples:
            | Name    | SKU | Description   |
            | Ketupat | KT  | Barang Jualan |

        # When I add "<salePrice>" and "<purchacePrice>" and with quantity "<num>"
        # Examples:
        #     | salePrice | purchacePrice | num |
        #     | 3000      | 2000          | 200 |