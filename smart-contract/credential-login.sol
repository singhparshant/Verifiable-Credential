// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract CredentialApplication {
    struct Applicant {
        address applicantAddress;
        bool status; // True means approved, False means not approved
    }

    mapping(address => bool) private admins;
    address[] public adminAddresses; // array to hold addresses of all admins
    Applicant[] public applicantList;

    // Modifier to restrict access to admins only
    modifier onlyAdmin() {
        require(admins[msg.sender] == true, "Access restricted to admins");
        _;
    }

    // Constructor to set deployer as the first admin
    constructor() {
        admins[msg.sender] = true;
        adminAddresses.push(msg.sender); // add the address to the array
    }

    // Function to add admins
    function addAdmin(address newAdmin) public onlyAdmin {
        require(!admins[newAdmin], "This address is already an admin");
        admins[newAdmin] = true;
        adminAddresses.push(newAdmin); // add the address to the array
    }

    // Function to return a list of all admins
    function getAllAdmins() public view returns(address[] memory) {
        return adminAddresses;
    }

    // Function to get the status of an applicant
    function getStatus(address applicantAddress) public view returns(bool) {
        for (uint i = 0; i < applicantList.length; i++) {
            if (applicantList[i].applicantAddress == applicantAddress) {
                return applicantList[i].status;
            }
        }
        return false;
    }

    function setStatus(address applicantAddress) public onlyAdmin {
        require(!admins[applicantAddress], "This address is an admin, can't set the status");
        applicantList.push(Applicant(applicantAddress, true));
    }
}
