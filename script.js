document.addEventListener('DOMContentLoaded', (event) => {
    const popupContainer = document.getElementById('popupContainer');

    // Function to create and append popups
    function createPopup(id, imageUrls, descriptions) {
        const popupDiv = document.createElement('div');
        popupDiv.id = id;
        popupDiv.className = 'popup';
        popupDiv.style.display = 'none'; // Ensure the popup is initially hidden
        
        const popupContentDiv = document.createElement('div');
        popupContentDiv.className = 'popup-content';

        const closeButton = document.createElement('span');
        closeButton.className = 'close';
        closeButton.innerHTML = '&times;';

        // Append multiple images
        imageUrls.forEach(imageUrl => {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = `Image for ${id}`;
            imageElement.style.width = '200px'; // Set image width
            imageElement.style.height = 'auto'; // Maintain aspect ratio
            popupContentDiv.appendChild(imageElement);
        });

        // Append multiple descriptions
        descriptions.forEach(description => {
            const descriptionPara = document.createElement('p');
            descriptionPara.innerText = description;
            popupContentDiv.appendChild(descriptionPara);
        });

        popupContentDiv.appendChild(closeButton);
        popupDiv.appendChild(popupContentDiv);

        popupContainer.appendChild(popupDiv);

        // Event listener for the close button
        closeButton.onclick = function() {
            popupDiv.style.display = 'none';
        };
    }

    // Function to set up button event listeners
    function setupPopupButtons() {
        const buttons = document.querySelectorAll('.openPopupBtn');
        
        buttons.forEach(button => {
            button.onclick = function() {
                const popupId = this.getAttribute('data-popup');
                const popup = document.getElementById(popupId);
                popup.style.display = 'block';
            };
        });

        // Close the popup when clicking outside of it
        window.onclick = function(event) {
            if (event.target.classList.contains('popup')) {
                event.target.style.display = 'none';
            }
        };
    }

    // Create popups with multiple image URLs and descriptions
    createPopup('popup101', ['./pictures/martin-D28.jpg', './pictures/martin-D28-back.jpg','./pictures/martin-D28-head.jpg','./pictures/martin-D28-bridge.jpg'], [`Body Size: D-14 Fret `,`Finish Top: Gloss`, 'TConstruction: Dovetail Neck Joint','Back and Side Finish: Gloss','Bracing Pattern: Forward-Shifted X-Brace','Scale Length: 25.4"','Brace Shape: Non-Scalloped','Fingerboard Width at Nut: 1 3/4','Top Material: Spruce','Neck Shape: Modified Low Oval','Back Material: East Indian Rosewood','Neck Taper: High-Performance Taper','Side Material: East Indian Rosewood','Electronics: Optional']);
 
    createPopup('popup102', ['./pictures/martin-HD35.jpg', './pictures/martin-HD35-back.jpg','./pictures/martin-HD35-head.jpg','./pictures/martin-HD35-bridge.jpg'], ['Body Size: D-14 Fret','Finish Top: Gloss','Construction: Dovetail Neck Joint','Back and Side Finish: Gloss','Bracing Pattern: Forward-Shifted X-Brace','Scale Length: 25.4','Brace Shape: Scalloped','Fingerboard Width at Nut: 1 3/4','Top Material: Spruce','Neck Shape: Modified Low Oval','Back Material: East Indian Rosewood','Neck Taper: High-Performance Taper','Side Material: East Indian Rosewood','Electronics: Optional']);

    createPopup('popup103', ['./pictures/martin-D45.jpg','./pictures/martin-D45-back.jpg','./pictures/martin-D45-head.jpg','./pictures/martin-D45-bridge.jpg'], ['Body Size: D-14 Fret','Finish Top: Gloss','Construction: Dovetail Neck Joint','Back and Side Finish: Gloss','Bracing Pattern: Forward-Shifted X-Brace','Scale Length: 25.4','Brace Shape: Scalloped','Fingerboard Width at Nut: 1 3/4','Top Material: Spruce','Neck Shape: Modified Low Oval','Back Material: East Indian Rosewood','Neck Taper: High-Performance Taper','Side Material: East Indian Rosewood','Electronics: Optional']);
    createPopup('popup104', ['./pictures/martin-ukulele.jpg','./pictures/martin-ukulele-back.jpg','./pictures/martin-ukulele-head.jpg'], ['Body Size: Concert Ukulele','Finish Top: Satin','Back and Side Finish: Satin','Bracing Pattern: Concert Ukulele','Scale Length: 15"','Brace Shape: Non-Scalloped','Fingerboard Width at Nut: 1 13/32','Top Material: Genuine Mahogany','Neck Shape: Concert Ukulele','Back Material: Genuine Mahogany','Neck Taper: Standard Taper','Side Material: Genuine Mahogany','Electronics: Not Available']);
    createPopup('popup105', ['./pictures/martin-DC-X2E-Brazilian-12String.jpg','./pictures/martin-DC-X2E-Brazilian-12String-back.jpg','./pictures/martin-DC-X2E-Brazilian-12String-head.jpg','./pictures/martin-DC-X2E-Brazilian-12String-bridge.jpg'], ['Body Size: D-14 Fret Cutaway','Finish Top: Hand-Rubbed','Construction: Mortise & Tenon Neck Joint','Back and Side Finish: Satin','Bracing Pattern: X-Brace','Scale Length: 25.4"','Brace Shape: Scalloped','Fingerboard Width at Nut: 1 7/8','Top Material: Spruce','Neck Shape: PA Profile','Back Material: Brazilian Rosewood HPL','Neck Taper: High-Performance Taper','Side Material: Brazilian Rosewood HPL','Electronics: Yes','Electronics Options: Martin E-1']);
    createPopup('popup106', ['./pictures/SC-13E-Special.jpg', './pictures/SC-13E-Special-back.jpg','./pictures/SC-13E-Special-head.jpg','./pictures/SC-13E-Special-bridge.jpg'], ['Body Size: S-13 Fret Cutaway','Finish Top: Gloss','Construction: Sure Align Linear Dovetail Neck Joint','Back and Side Finish: Gloss','Bracing Pattern: Tone Tension X Brace','Scale Length: 25.4"','Brace Shape: Treble Side Scalloped X with Non-Scalloped Tone Bars',`Fingerboard Width at Nut: 1 3/4''`,'Top Material: Spruce','Neck Shape: Low Profile Velocity','Back Material: Ziricote Fine Veneer','Neck Taper: High-Performance Taper','Side Material: Ziricote Fine Veneer','Electronics: LR Baggs Element']);
    createPopup('popup201', ['./pictures/gibson-sj200.jpg','./pictures/gibson-sj200-back.jpg','./pictures/gibson-sj200-head.jpg','./pictures/gibson-sj200-bridge.png'], ['This is the first description for popup 1.', 'This is the second description for popup 1.']);
    createPopup('popup202', ['./pictures/gibson-g00.jpg','./pictures/gibson-g00-back.jpg','./pictures/gibson-g00-head.jpg','./pictures/gibson-g00-bridge.jpg'], ['Finish Chrome','Bridge=Rectangular, Closed Slot, Striped Ebony','Saddle Material,TUSQ','Tuning Machines','Grover Mini Rotomatic','Pickguard=Black','Truss Rod=Adjustable','Truss Rod Cover=Walnut Laminate','Bridge Pins=Black','Strap Buttons 2']);
    createPopup('popup203', ['./pictures/gibson-1934.jpg','./pictures/gibson-1934-back.jpg','./pictures/gibson-1934-head.jpg','./pictures/gibson-1934-bridge.jpg'], ['Body Style=Round Shoulder','Body Shape=Advanced Jumbo','Top= Thermally Aged Red spruce Back Mahogany','Side= Mahogany','Bracing Traditional hand-scalloped Advanced X-bracing, red spruce braces with hide glue','        Binding Single-ply top, single-ply back','Body Finish=Thin Finish Nitrocellulose, VOS']);
    createPopup('popup204', ['./pictures/gibson-paul.jpg','./pictures/gibson-paul-back.jpg','./pictures/gibson-paul-head.jpg','./pictures/gibson-paul-bridge.jpg'], ['Neck Pickup:490R','Bridge Pickup:498T','Controls:2 Push/Pull Volume (Coil Tap), 2 Push/Pull Tone (Phase & Pure Bypass)','Pickup Selector:3-way Toggle','Output Jack:1/4"']);
    createPopup('popup205', ['./pictures/gibson-flyingV.jpg','./pictures/gibson-flyingV-back.jpg','./pictures/gibson-flyingV-head.jpg','./pictures/gibson-flyingV-bridge.jpg'], ['Neck Pickup:70s Tribute','Bridge Pickup:70s Tribute','Controls:2 Volumes, 1 Tone & Toggle Switch (Hand-wired with Orange Drop Capacitors)']);
    createPopup('popup206', ['./pictures/gibson-ebony.jpg','./pictures/gibson-ebony-back.jpg','./pictures/gibson-ebony-head.jpg','./pictures/gibson-ebony-bridge.jpg'], ['Neck Pickup:490R Humbucker','Bridge Pickup:498T Humbucker','Controls:2 500K CTS Volume Pots, 1 500K CTS Tone Pot, Hand-Wired Harness','Pickup Selector:3-Way Switchcraft','Output Jack:Switchcraft']);
    createPopup('popup301', ['./pictures/fender-duo-sonic.jpg','./pictures/fender-duo-sonic-back.jpg','./pictures/fender-duo-sonic-head.jpg','./pictures/fender-duo-sonic-bridge.jpg'], ['24" scale length; "C"-shaped maple neck','Two Duo-Sonic single-coil pickups','9.5"-radius maple fingerboard with 22 medium jumbo frets','Six-saddle string-through-body hardtail Strat® bridge with bent steel saddles','Master Volume and Tone controls; three-way pickup switch']);
    createPopup('popup302', ['./pictures/fender-Stratocaster.jpg','./pictures/fender-Stratocaster-back.jpg','./pictures/fender-Stratocaster-head.jpg','./pictures/fender-Stratocaster-bridge.jpg'], ['Two V-Mod II single-coil Stratocaster pickups','Double Tap™ Humbucking Bridge Pickup','Upgraded 2-Point Tremolo with Cold-Rolled Steel Block','Deep "C"-shaped neck profile with rolled fingerboard edges','Bone nut; 22 narrow-tall frets for easy bending','Treble bleed circuit maintains highs when reducing volume','Includes Deluxe Molded hardshell case']);
    createPopup('popup303', ['./pictures/fender-acoustasonic.jpg','./pictures/fender-acoustasonic-back.jpg','./pictures/fender-acoustasonic-head.jpg','./pictures/fender-acoustasonic-bridge.jpg'], ['Two pickup systems: Fender Acoustasonic Noiseless; Fishman Under-Saddle Transducer','Acoustic Engine delivers a new and unique set of acoustic and electric voices','Blend Knob selects and blends voices','Patented Stringed Instrument Resonance System (SIRS)','Integrated forearm contour and mahogany neck','9-Volt battery']);
    createPopup('popup304', ['./pictures/fender-aerodyne.jpg','./pictures/fender-aerodyne-back.jpg','./pictures/fender-aerodyne-head.jpg','./pictures/fender-aerodyne-bridge.jpg'], ['Slim Aerodyne basswood body with bound carved top','Maple neck with 12" radius maple or rosewood fingerboard','Matching painted headcap','Aerodyne Special pickups','Babicz® FCH bridge','Locking tuners']);
    createPopup('popup305', ['./pictures/fender-lead.jpg','./pictures/fender-lead-back.jpg','./pictures/fender-lead-head.jpg','./pictures/fender-lead-bridge.jpg'], ['Player Series Humbucking Pickups','3-Way Coil-Split Toggle Switch','Modern "C" Neck Profile','Comfortable Lead Body Shape','70s-style "F" Logo Tuners']);
    createPopup('popup401', ['./pictures/yamaha-f600.jpg','./pictures/yamaha-f600-back.jpg','./pictures/yamaha-f600-head.jpg','./pictures/yamaha-f600-bridge.jpg'], ['Traditional Western Body','Spruce Top','High durability and stability proven by Yamaha','s quality standard'])
    createPopup('popup402', ['./pictures/yamaha-fsx-80c.jpg','./pictures/yamaha-fsx-80c-back.jpg','./pictures/yamaha-fsx-80c-head.jpg','./pictures/yamaha-fsx-80c-bridge.jpg'], ['Concert Body Cutaway','Spruce Top','Yamaha Quality in an Affordable Price','Recreate Natural Tone and Dynamics by ART Pickup'])
    createPopup('popup403', ['./pictures/yamaha-rse20.jpg','./pictures/yamaha-rse20-back.jpg','./pictures/yamaha-rse20-head.jpg','./pictures/yamaha-rse20-bridge.jpg'], ['5 Café racer inspired finishes','Chambered mahogany body','Mahogany neck','2 Alnico V humbucking pickups','Push/pull Dry Switch high-pass filter'])
    createPopup('popup404', ['./pictures/yamaha-cg20.jpg','./pictures/yamaha-cg20-back.jpg','./pictures/yamaha-cg20-head.jpg','./pictures/yamaha-cg20-bridge.jpg'], ['Yamaha CG Shape','Solid Spruce Top','Rosewood Back & Sides','Nato Neck','Ebony Fingerboard'])
    createPopup('popup405', ['./pictures/yamaha-pacs.jpg','./pictures/yamaha-pacs-back.jpg','./pictures/yamaha-pacs-head.jpg','./pictures/yamaha-pacs-bridge.jpg'], ['HSS pickup configuration with 5-way Selector','Reflectone pickups created in collaboration with Rupert Neve Designs','Choice of four new finishes with a Southern California vibe','Controls for Volume and Tone (with push-pull coil split)','Slim C-shape maple neck with satin finish','Rosewood fingerboard with medium stainless-steel frets','Gotoh locking tuners and 2-point tremolo bridge','Gig bag included'])
    createPopup('popup405', ['./pictures/yamaha-pac300.jpg','./pictures/yamaha-pac300-back.jpg','./pictures/yamaha-pac300-head.jpg','./pictures/yamaha-pac300-bridge.jpg'], ['Graph Tech TUSQ Nut','Grover locking tuners','Humbucker and P-90 type pickups','Alder body with maple neck and rosewood fingerboard','3-position pickup selector','Push-pull coil-split switch for additional tonal options'])
    createPopup('popup406', ['./pictures/yamaha-trbx.jpg','./pictures/yamaha-trbx-back.jpg','./pictures/yamaha-trbx-head.jpg','./pictures/yamaha-trbx-bridge.jpg'], ['Solid mahogany construction','Maple / Mahogany 5-Piece Neck','Slim 38mm nut width','2-band active EQ with 5-way Performance EQ preset switch'])
    createPopup('popup501', ['./pictures/Other-md39c.jpg','./pictures/Other-md39c-back.jpg','./pictures/Other-md39c-head.jpg','./pictures/Other-md39c-bridge.jpg'], ['Type - Acoustic Guitar with cutaway','Model - MD39C','Fret with truss rod','Top - Spruce','Back & Sides - Nato','Size - 39 inches','Number of Strings - 6','Number of Frets - 20','Fingerboard Material - Rosewood','Finish - Natural & Sunburst'])
    createPopup('popup502', ['./pictures/Other-ea40ce.jpg','./pictures/Other-ea40ce-back.jpg','./pictures/Other-ea40ce-head.jpg','./pictures/Other-ea40ce-bridge.jpg'], ['Acoustic Steel String Guitar','Truss Rod','Cutaway','Size 41”','Finish - Natural','Top - Solid Spruce','Electronics : CW10 With EQ','Back - Mahogany Laminate','Sides - Mahogany Laminate','Fret Board - Blackwood','20 Frets','Diecast Tuners'])
    createPopup('popup503', ['./pictures/Other-traveller.jpg','./pictures/Other-traveller-back.jpg','./pictures/Other-traveller-head.jpg','./pictures/Other-traveller-bridge.jpg'], ['Size: 34" Steel stringed','Number of Strings: 6','Body shape: Dreadnought (Full bodied)','Colour: Natural','Finish: Glossy','Top Material: Spruce Laminate','Back & Sides Material: Basswood','Neck Material: Mahogany','Fretboard: Rosewood','Fingerboard Inlay: Dots','Number of Frets: 19','Tuners: Die-cast'])
    createPopup('popup504', ['./pictures/Other-GRX70QA.jpg','./pictures/Other-GRX70QA-back.jpg','./pictures/Other-GRX70QA-head.jpg','./pictures/Other-GRX70QA-bridge.jpg'], ['Neck type : GRX Maple neck','Body : Quilted Maple Art Grain top/Poplar body','Fretboard : Jatoba fretboard w/White dot inlay','Fret : Medium frets','Bridge : FAT-6 tremolo bridge','Neck pickup : Infinity R (H) neck pickup (Passive/Ceramic)','Middle pickup : Infinity RS (S) middle pickup (Passive/Ceramic)','Bridge pickup : Infinity R (H) bridge pickup (Passive/Ceramic)','Factory tuning : 1E, 2B, 3G, 4D, 5A, 6E','String gauge : .009/.011/.016/.024/.032/.042','Hardware color: Chrome'])
    createPopup('popup505', ['./pictures/Other-LP1.jpg','./pictures/Other-LP1-back.jpg','./pictures/Other-LP1-head.jpg','./pictures/Other-LP1-bridge.jpg'], ['Body Shape: Les Paul','Body Material: Poplar','Body finish: Gloss','Orientation: Right-handed','Neck Material: Maple','Fingerboard Material: Indian Laurel','Number of Frets: 22','Joint: Bolt-On with plate','Scale Length: 650 mm','Nut Width: 43 mm','Truss Rod: Dual-Action','Bridge: Tune-O-Matic Bridge','Overall Length: 970 mm','Included Accessories: L Key','Pickups','H-H Pickup','3-Way Pickup Selector','Knobs: 2 Volume & 2 Tone Knobs'])
    createPopup('popup601', ['./pictures/Acess.oil.jpg'], ['D`Addario PW-LMN Lemon Oil Cleaner & Conditioner'])
    createPopup('popup602', ['./pictures/Acess.oil2.jpg'], ['Dunlop Fretboard 65 Ultimate Lemon Oil - Guitar Maintenance'])
    createPopup('popup603', ['./pictures/Acess.oil3.jpg'], ['Music Nomad MN702 Bore Oil Cleaner And Conditioner'])
    createPopup('popup604', ['./pictures/bag.jpg'], ['Ibanez IGB541 Powerpad Designer Collection Electric Guitar Gig Bags'])
    createPopup('popup605', ['./pictures/bag2.jpg'], ['Fender FA405 Dreadnought Acoustic Guitar Gigbag'])
    createPopup('popup606', ['./pictures/bag3.jpg'], ['Armour ARM1250G 10MM Electric Guitar Gig Bag'])
    createPopup('popup607', ['./pictures/cappo.jpg'], ['Tanglewood TSPC Speedbar Capo - Silver Finish'])
    createPopup('popup608', ['./pictures/cappo2.jpg'], ['Ernie Ball Axis Capo'])
    createPopup('popup609', ['./pictures/cappo3.jpg'], ['Havana MC-1 Guitar Capo'])
    createPopup('popup610', ['./pictures/strings1.jpg'], ['D`Addario EZ910 85/15 American Bronze Acoustic Guitar Strings'])
    createPopup('popup611', ['./pictures/strings2.jpg'], ['D`Addario EJ10 Acoustic Guitar Strings - Bronze, Extra Light'])
    createPopup('popup612', ['./pictures/strings3.jpg'], ['DAddario XT Phosphor Bronze Acoustic Guitar Strings Coated Set'])
    createPopup('popup613', ['./pictures/peak.jpg'], ['Dunlop 424R Tortex Wedge Guitar Picks'])
    createPopup('popup614', ['./pictures/peak2.jpg'], ['Dunlop 44R Nylon Standard Guitar Picks '])
    createPopup('popup615', ['./pictures/peak3.jpg'], ['Fender 351 Celluloid Medley Guitar Picks'])
    
    setupPopupButtons();
});



function categories(){
    const selectElement = document.getElementsByClassName('categories');
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.herf= selectedValue;
    }
}






document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    let isScrolling = false;
    let scrollTimeout;

    document.querySelectorAll('.subNav a, .select-section').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            if (isScrolling) {
                console.log("Currently scrolling, preventing default");
                return;
            }

            console.log("Anchor clicked, proceeding with smooth scroll");

            const targetId = this.getAttribute('href').substring(1);
            console.log("Target ID:", targetId);
            const targetElement = document.getElementById(targetId);
            console.log("Target Element:", targetElement);

            if (targetElement) {
                // Calculate offset position to bring the section 20 rem from the top of the page
                const offsetPosition = targetElement.offsetTop + 32 * parseFloat(getComputedStyle(document.documentElement).fontSize);

                console.log("Offset Position:", offsetPosition);

                isScrolling = true;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Clear any existing timeout
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }

                // Reset isScrolling flag after a delay
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                    console.log("Scrolling completed");
                }, 1000); // Adjust the timeout to match the scroll duration
            } else {
                console.log("Target element not found");
            }
        });
    });
});




document.getElementById('heartButton').addEventListener('click', function() {
    const heartIcon = this.querySelector('.heart');
    heartIcon.classList.toggle('filled');
    heartIcon.innerHTML = heartIcon.classList.contains('filled') ? '&#10084;' : '&#9825;';
});

document.getElementById('cartButton').addEventListener('click', function() {
    const cartIcon = this.querySelector('.cart');
    cartIcon.classList.toggle('filled');
});



function like(){
      like=document.body.getElementsByClassName('one');
      like.innerHTML='';
      like.innerHTML=' background-image: src"like-r-image.jpg"';
}