function save_options() {
    var repo = document.getElementById('repo').value;
    var token = document.getElementById('token').value;
    chrome.storage.sync.set({
        repo: repo,
        token: token
    }, function() {
        var status = document.getElementById('status');
        debugger;
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
          }, 2000);


    });


}

function restore_options() {
    chrome.storage.sync.get({
        'repo': '',
        'token': ''
    }, function(items) {
        document.getElementById('repo').value = items.repo;
        document.getElementById('token').value = items.token;
    })
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options)
