<?php

namespace plugins\figureSwipe;

use \typemill\plugin;

class figureSwipe extends plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'onSettingsLoaded'      => 'onSettingsLoaded',
            'onTwigLoaded'          => 'onTwigLoaded'
        ];
    }   
    public function onSettingsLoaded($settings)
    {
        $this->settings = $settings->getData();
    }
    public function onTwigLoaded()
    {
        $this->addCSS('/figureSwipe/lib/PhotoSwipe/dist/photoswipe.css');
        $this->addCSS('/figureSwipe/lib/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css');
        $this->addJS('/figureSwipe/figureSwipe.js', 'type="module"');

/*
        // get Twig Instance and add the figureSwipe template-folder to the path 
        $twig   = $this->getTwig();                 
        $loader = $twig->getLoader();
        $loader->addPath(__DIR__ . '/templates');

        // fetch the template, render it with twig and add it as inline-javascript 
        $this->addInlineJS($twig->fetch('/figureSwipe.twig'));
*/        
    }
}