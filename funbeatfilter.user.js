// ==UserScript==
// @name           Funbeat-filter
// @namespace      halhen
// @description    Hide entries from selected users on funbeat.se
// @version        1.0
// @include        http://www.funbeat.se/discussion/show.aspx*
// ==/UserScript==


    var filtered = [];

    function loadFiltered()
    {
        var stored = GM_getValue("filteredusers", "");
        if (stored) {
            filtered = stored.split(",");
        } else {
            filtered = [];
        }
    }

    function saveFiltered()
    {
        var stored = filtered.join(",");
        GM_setValue("filteredusers", stored);
    }

    function indexOfFiltered(user) 
    {
        for (var i = 0; i < filtered.length; i++) {
            if (user == filtered[i])
                return i;
        }
        return -1;
    }
    function isFiltered(user)
    {
        return indexOfFiltered(user) != -1;
    }

    function addFiltered(user)
    {
        if (!isFiltered(user)) {
            filtered[filtered.length] = user;
            saveFiltered();
            addUserButtons();
            filter();
        }
    }

    function removeFiltered(user) 
    {
        var index = indexOfFiltered(user);
        if (index != -1) {
            filtered.splice(index, 1); 
            saveFiltered();
            addUserButtons();
        }
    }

    function perMessage(fn)
    {
        var as = document.getElementsByTagName('a');
        var msg_as = [];
        // Collect first, then process. Some engines seem to get confused if we insert new a's while iterating
        for (var i = 0; i < as.length; i ++) {
            if (as[i].href.indexOf("/person/overview.aspx?PersonID=") != -1) {
                if (as[i].parentNode.className == "msg") {
                    msg_as[msg_as.length] = as[i];
                }
            }
        }

        for (var i = 0; i < msg_as.length; i ++) {
            user = msg_as[i].href.split("=")[1];
            tr = msg_as[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            fn(user, msg_as[i], tr);
        }
    }

    function clear(tagName, className) 
    {
        var els = document.getElementsByTagName(tagName);
        var toclear = [];

        for (var i = 0; i < els.length; i ++) {
            if (els[i].className == className) {
                toclear[toclear.length] = els[i]; 
            }
        }

        for (var i = 0; i < toclear.length; i ++) {
            toclear[i].parentNode.removeChild(toclear[i]);
        }
    }

    function addUserButtons()
    {
        clearUserButtons();
        perMessage(function (user, user_a, tr) {
            var f = document.createElement('span');
            f.className = '_filtertoggle';
            f.style.color="#aaaaaa";

            var a = document.createElement('a');
            a.alt = "Filter";
            if (isFiltered(user)) {
                a.addEventListener("click", function() {removeFiltered(user);}, true);
                a.innerHTML = '<b>+</b>';
            } else {
                a.addEventListener("click", function() {addFiltered(user);}, true);
                a.innerHTML = '<b>-</b>';
            }
            f.appendChild(document.createTextNode(" ["));
            f.appendChild(a);
            f.appendChild(document.createTextNode("]"));
            user_a.parentNode.insertBefore(f, user_a.nextSibling);
        });
    }

    function clearUserButtons()
    {
        clear('span', '_filtertoggle');
    }

    function filter()
    {
        clearFilteredMessage();
        perMessage(function (user, user_a, tr) {
            if(isFiltered(user)) {
                tr.style.display = "none";
                trmsg = document.createElement('tr');
                trmsg.className = '_filteredmsg';
                td = document.createElement('td');
                td.colSpan = 3;
                a = document.createElement('a');
                a.addEventListener("click", function() {showAll()}, true);
                a.innerHTML = '<small><i><font color="#aaaaaa">Ignorerat inl&auml;gg. Klicka f&ouml;r att visa alla.</font></i></small>'
                td.appendChild(a);
                trmsg.appendChild(td);
                tr.parentNode.insertBefore(trmsg, tr);
            } else {
                tr.style.display = "table-row";
            }
        });
    }

    function clearFilteredMessage()
    {
        clear('tr', '_filteredmsg');
    }

    function showAll()
    {
        clearFilteredMessage();
        perMessage(function (user, user_a, tr) {
            tr.style.display = "table-row";
        });
    }

    loadFiltered();
    addUserButtons();
    filter();
