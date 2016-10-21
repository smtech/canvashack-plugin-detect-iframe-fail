{extends file="page.tpl"}

{block name="content"}

    <div class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span class="sr-only">Error:</span>
        The embedded content that should be here cannot be displayed.{if $isGoogle} This content requires you to be logged in to Google. <a class="alert-link" href="http://gmail.com" target="_blank">Please follow this link to log in to Google</a> and then refresh this page.{/if}
    </div<>

{/block}
