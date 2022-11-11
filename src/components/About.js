export default function About() {
    const flexStyle = {
        display: 'flex',
    }

    const imgStyle = {
        maxWidth: '300px',
        maxHeight: '350px',
        borderRadius: '10%'
    }
    return(
        <div style={flexStyle}>
            <div>
                <img style={imgStyle} src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"/>
            </div>
            <div>
                <h2>About Me</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam elementum est nec vulputate varius. 
                Nunc ut lorem at eros facilisis lobortis. 
                Maecenas elementum suscipit eleifend. 
                Cras ornare, nunc a semper condimentum, nunc dolor ullamcorper erat, 
                id vehicula quam nibh in nulla. Aliquam tempor pulvinar turpis 
                pharetra semper. Donec lacinia dolor massa. Mauris commodo diam 
                massa, quis fringilla orci hendrerit varius. Morbi nec arcu sed nisi 
                facilisis iaculis in a diam. Vivamus id libero sit amet nibh 
                condimentum viverra. Donec nisl eros, accumsan vitae turpis ut, 
                molestie molestie mauris. Ut id varius felis, ac volutpat nibh. 
                Phasellus accumsan ante sit amet orci fermentum cursus a sit amet 
                metus. Aenean at maximus enim. Phasellus vehicula tellus vel risus 
                varius, ac malesuada velit pretium. Vivamus vestibulum tincidunt 
                elit, eu hendrerit massa interdum id.
                </p>
            </div>
        </div>
    )
}