Feature: Manage Items

    As a User of Akaunting software
    I want to be able to manage Items

    Background:
        Given I have logged in to Akauntin web portal

    @Verbose
    Scenario Outline: Add New Item
        When I add New Item Form with "<Name>" and "<SKU>" and "<Description>"
        And I add Sales Price "3000" and purchase price "2000" and with quantity "200"
        And I give tax "2" % and category "Makanan" and without picture attached
        Examples:
            | Name    | SKU | Description   |
            | Ketupat | KT  | Barang Jualan |
