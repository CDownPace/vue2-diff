import {
    ATTR,
    TEXT,
    REPLACE,
    REMOVE
} from './patchTypes'
let patches = {};
let vnIndex = 0;
function domDiff(oldVDom, newVDom) {
    vnodeWalk(oldVDom, newVDom, vnIndex)
    return patches
}

function vnodeWalk(oldNode, newNode, index) {
    let vnPatch = [];
    console.log('index2-', index)
    if (!newNode) {
        vnPatch.push({
            type: REMOVE,
            index
        })
    } else if (typeof oldNode === 'string' && typeof newNode === 'string') {
        if (oldNode != newNode) {
            vnPatch.push({
                type: TEXT,
                text: newNode
            })

        }
    } else if (oldNode.type === newNode.type) {
        const attrPatch = attrsWalk(oldNode.props, newNode.props)
        console.log('attrPatch', attrPatch)

        if (Object.keys(attrPatch).length > 0) {
            vnPatch.push({
                type: ATTR,
                attrs: attrPatch
            })
        }
        childrenWalk(oldNode.children, newNode.children);
    } else {
        vnPatch.push({
            type: REPLACE,
            newNode: newNode
        })
    }
    console.log('vnPatch', index, vnPatch)
    if (vnPatch.length > 0) {
        patches[index] = vnPatch
    }

}


function attrsWalk(oldAttrs, newAttrs) {
    let attrPatch = {};

    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            attrPatch[key] = newAttrs[key];
        }
    }
    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            attrPatch[key] = newAttrs[key]
        }

    }
    return attrPatch
}
function childrenWalk(oldChildren, newChildren) {
    oldChildren.map((c, idx) => {
        vnodeWalk(c, newChildren[idx], ++vnIndex)
    })
}
export default domDiff;