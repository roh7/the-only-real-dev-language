walk(document.body);

function walk(node) 
{
    // Source: http://is.gd/mwZp7E
    
    var child, next;

    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    v = v.replace(/\Node.js\b/g, "The only real dev language");
    v = v.replace(/\bnode.js\b/g, "the only real dev language");
    v = v.replace(/\bNODE.js\b/g, "The only real dev language");
    v = v.replace(/\bnode.JS\b/g, "the only real dev language");
    v = v.replace(/\bNODE.JS\b/g, "THE ONLY REAL DEV LANGUAGE");

    v = v.replace(/\bNode js\b/g, "The only real dev language");
    v = v.replace(/\bnode js\b/g, "the only real dev language");
    v = v.replace(/\bNODE js\b/g, "The only real dev language");
    v = v.replace(/\bnode JS\b/g, "the only real dev language");
    v = v.replace(/\bNODE JS\b/g, "THE ONLY REAL DEV LANGUAGE");    


    v = v.replace(/\Nodejs\b/g, "The only real dev language");
    v = v.replace(/\nodejs\b/g, "the only real dev language");
    v = v.replace(/\NodeJS\b/g, "The only real dev language");
    v = v.replace(/\nodeJS\b/g, "the only real dev language");
    v = v.replace(/\NODEJS\b/g, "THE ONLY REAL DEV LANGUAGE");
    
    textNode.nodeValue = v;
}
