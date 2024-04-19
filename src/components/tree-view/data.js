const data = [{
    label: "Home",
    to: "/"
},
{
    label: "Profile",
    to: "/profile",
    children: [{
        label: "Details",
        to: "/details",
        children:[{ 
            label: "Location",
            to: "/location",
            children: [{
                label: "City",
                to: "/city"
            }

            ]
        }]
        
    }]
},
{
    label: "Setting",
    to: "/setting",
    children: [{
        label: "Account",
        to: "/details",
        children:[
            {
                label: "Balance",
                to: "/balance"
            }
        ]
    }]
},
{
    label: "Security",
    to: "/security",
    children: [
        {
            label: "Login",
            to: "/login"
        },
        {
            label: "Register",
            to: "Register"
        }
    ]
}]

export default data